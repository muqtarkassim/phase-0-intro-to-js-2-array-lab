// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return(cats.push(name))
}
function destructivelyPrependCat(name){
    return(cats.unshift(name))
}
function   destructivelyRemoveLastCat(name){
    return(cats.pop(name))
}
function  destructivelyRemoveFirstCat(name){
    return(cats.shift(name))
}
function  appendCat(name){
    const catName=[...cats,name]
    return(
        catName
    )

}
function  prependCat(name){
    const CatName=[name,...cats]
    return(
    
    CatName
    )

}
function removeLastCat(){
const catName=cats.slice(0,cats.length-1)
return(catName)
}
function removeFirstCat(){
    const catName=cats.slice(1)
    return(catName)
}