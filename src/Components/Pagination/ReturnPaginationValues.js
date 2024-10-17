

function ReturnPaginationValues(props) {

    const totalPageInArray = (7 + props.siblings)

    if(totalPageInArray >= props.totalPage){

        const pageInArray=[]
        
        for (let index = 1; index <= props.totalPage; index++) {
            pageInArray.push(index);
            
        }

        return [...pageInArray]
        
    }



    const leftSiblingIndex = Math.max(props.page-props.siblings,1)
    const rightSiblingsIndex = Math.min(props.page + props.siblings, props.totalPage)

    const showLeftDot = leftSiblingIndex > 2
    const showRightDot = rightSiblingsIndex < props.totalPage - 2

    if(!showLeftDot && showRightDot){

        const leftIndexCount = 3 + 2 *props.siblings
    
        const leftIndexRange =[]

        for (let index = 1; index <= leftIndexCount; index++) {
            leftIndexRange.push(index);
            
        }

        return [...leftIndexRange,"... ",props.totalPage]

    }else if(showLeftDot && !showRightDot){

        const rightIndexRange = []

        const rightIndexCount= 3 + 2 *props.siblings
    
        for (let index = (props.totalPage - rightIndexCount + 1); index <= props.totalPage; index++) {
            rightIndexRange.push(index);
            
        }

        return [1," ...", ...rightIndexRange]

    } else {
        const middleRange=[]

        for (let index = leftSiblingIndex; index <= rightSiblingsIndex; index++) {
            middleRange.push(index);
            
        }

        return [1," ...",...middleRange,"... ",props.totalPage]
    }
}


export default ReturnPaginationValues