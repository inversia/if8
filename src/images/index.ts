/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import _images from '*.(jpg|png|svg)'

// @ts-ignore
const images = Object.fromEntries (
    Object
        // @ts-ignore
        .entries (_images)
        // @ts-ignore
        .map (([name, extensions]) => [name, Object.values (extensions)[0]])
)

export default images as { [key: string]: string }