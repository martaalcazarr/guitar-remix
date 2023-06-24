export async function getCourse(){
    const response = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
    const result = await response.json()
    return result
}