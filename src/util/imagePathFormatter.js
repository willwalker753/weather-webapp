import baseName from "./baseName";

const imagePathFormatter = image => {    
    let imagePath = `/assets/image/${image[0] === "/" ? image.slice(1) : image}`;
    if (process.env.GITHUB_PAGES) {
        imagePath = baseName + imagePath;
    }
    return imagePath;
}

export default imagePathFormatter;