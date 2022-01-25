function slugify(title) {
    // Change code below this line
    const normal = title.toLowerCase().split(" ").join("-")
    console.log(normal);
    return normal
    const slug = normal.join("-")
    return slug


    // Change code above this line
}
slugify("Arrays for begginers");