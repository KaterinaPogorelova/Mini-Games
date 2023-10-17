const winCombinationsPilesId = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

//Horizontal /0,1,2/ /3,4,5/ /6,7,8/
//Vertical /0,3,6/ /1,4,7/ /2,5,8/
//Diagonal /0,4,8/ /2,4,6/

export const makeMoveForNoughts = (allPileValues: (null | 'X' | 'O')[]) => {
    const allCrossesId = findAllCrossesId(allPileValues)
    if (allCrossesId.length === 1) return moveToRandom(allPileValues)
    const allNoughtsId = findAllNoughtsId(allPileValues)

    const AIWinCombo = findComboForNoughtsWin(allCrossesId, allNoughtsId)
    if (AIWinCombo !== undefined) {
        const move = AIWinCombo.find((value) => !allNoughtsId.includes(value))
        if (move || move === 0) return move
        if (!move) return null
    }

    const oppositeWinCombo = checkOppositeWinCombo(allCrossesId, allNoughtsId)
    if (oppositeWinCombo !== undefined) {
        const move = oppositeWinCombo.find((value) => !allCrossesId.includes(value))
        if (move || move === 0) return move
        if (!move) return null
    }
    const potentialMove = makePotentialMoveToWin(allCrossesId, allNoughtsId)
    if (potentialMove !== undefined) {
        const move = potentialMove.find((value) => !allNoughtsId.includes(value))
        if (move || move === 0) return move
        if (!move) return null
    } else {
        const random = moveToRandom(allPileValues)
        return random
    }
    return null
}

const checkOppositeWinCombo = (allCrossesId: number[], allNoughtsId: number[]) => {
    const combo = winCombinationsPilesId.find((combosArr) => {
        const doesComboContainNought = combosArr.find((value) => allNoughtsId.includes(value))
        if (doesComboContainNought !== undefined) return false
        const matches = combosArr.reduce((acc, value) => {
            if (allCrossesId.includes(value)) {
                acc++
            }
            return acc
        }, 0)
        if (matches === 2) return true
    })
    return combo
}

const findAllCrossesId = (allPileValues: (null | 'X' | 'O')[]) => {
    const allCrossesId = allPileValues.reduce((acc: number[], value, index) => {
        if (value === 'X') {
            acc.push(index)
            return acc
        }
        return acc
    }, [])
    return allCrossesId
}

const findAllNoughtsId = (allPileValues: (null | 'X' | 'O')[]) => {
    const allNoughtsId = allPileValues.reduce((acc: number[], value, index) => {
        if (value === 'O') {
            acc.push(index)
            return acc
        }
        return acc
    }, [])
    return allNoughtsId
}

const moveToRandom = (allPileValues: (null | 'X' | 'O')[]) => {
    const freePlaces = allPileValues.reduce((acc: number[], value, index) => {
        if (value === null) {
            acc.push(index)
            return acc
        }
        return acc
    }, [])
    const randomId = Math.floor(Math.random() * allPileValues.length)
    return freePlaces[randomId]
}

const findComboForNoughtsWin = (allCrossesId: number[], allNoughtsId: number[]) => {
    const combo = winCombinationsPilesId.find((combosArr) => {
        const doesComboContainCross = combosArr.find((value) => allCrossesId.includes(value))
        if (doesComboContainCross !== undefined) return false
        const matches = combosArr.reduce((acc, value) => {
            if (allNoughtsId.includes(value)) {
                acc++
            }
            return acc
        }, 0)
        if (matches === 2) return true
    })
    return combo
}

const makePotentialMoveToWin = (allCrossesId: number[], allNoughtsId: number[]) => {
    const combo = winCombinationsPilesId.find((combosArr) => {
        const doesComboContainCross = combosArr.find((value) => allCrossesId.includes(value))
        if (doesComboContainCross !== undefined) return false
        const matches = combosArr.reduce((acc, value) => {
            if (allNoughtsId.includes(value)) {
                acc++
            }
            return acc
        }, 0)
        if (matches === 1) return true
    })
    return combo
}

export const checkForWinner = (allPileValues: (null | 'X' | 'O')[]) => {
    const allCrossesId = findAllCrossesId(allPileValues)
    const allNoughtsId = findAllNoughtsId(allPileValues)
    const crossesCombo = winCombinationsPilesId.find((combosArr) => {
        const matches = combosArr.reduce((acc, value) => {
            if (allCrossesId.includes(value)) {
                acc++
            }
            return acc
        }, 0)
        if (matches === 3) return true
    })
    const noughtsCombo = winCombinationsPilesId.find((combosArr) => {
        const matches = combosArr.reduce((acc, value) => {
            if (allNoughtsId.includes(value)) {
                acc++
            }
            return acc
        }, 0)
        if (matches === 3) return true
    })
    const tieSituation = !allPileValues.includes(null)
    if (noughtsCombo) return 'O'
    if (crossesCombo) return 'X'
    if (tieSituation) return 'Tie'
    return null
}