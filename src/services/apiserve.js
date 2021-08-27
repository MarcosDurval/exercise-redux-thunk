const randomImage = async () => {
  const data = await fetch('https://some-random-api.ml/animal/panda')
  const response = await data.json();
  return response.image
}
// randomImage().then((data) => console.log(data))
export default randomImage