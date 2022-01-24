function slugify(title) {
    // Change code below this line
    const normal = title.normalize()
    console.log(normal);
    const slug = normal.join("-")
    return slug


    // Change code above this line
}
console.log(slugify("Arrays for begginers"));