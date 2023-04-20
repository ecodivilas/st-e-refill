// READ/FETCH/GET User
export async function getAllContainers() {
  try {
      const response = await fetch('/api/v1/containers')
      return response.json()
  } catch (error) {
      console.log('Error: ', error)
  }
}