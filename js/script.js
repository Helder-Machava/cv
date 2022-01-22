//CONTENT TO BE FILTER (Cntt)
var design = document.querySelector('.designCntt')
var wood = document.querySelector('.woodCntt')

// END OF CONTENT TO BE FILTER (Cntt)


function sessionDev() {
    if (design.style.display === 'block' || wood.style.display === 'block') {
        design.style.display = 'none'
        wood.style.display = 'none'
    }
     else {
        design.style.display = 'none'
        wood.style.display = 'none'

    }

}

function sessionAll() {
    if (design.style.display === 'none' || wood.style.display === 'none') {
        design.style.display = 'block'
        console.log('DESIGN COLL')

        wood.style.display = 'block'
        console.log('WOOD COLL')

    } else {
        design.style.display = 'block'
        wood.style.display = 'block'
        console.log('DESIGN COLL')
        console.log('WOOD COLL')

    }

}
