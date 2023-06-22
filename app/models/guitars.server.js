export async function getGuitars(){
const response = await fetch(`${process.env.API_URL}/guitars?populate=imagen`)
  const result = await response.json()
  return result
}
export async function getGuitar(url){
    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=imagen`)
    return response.json()
}

