const randomImage = async () => {
  const data = await fetch('https://some-random-api.ml/animu/wink')
  const response = await data.json();
  return response.link
}
// randomImage().then((data) => console.log(data))
export default randomImage