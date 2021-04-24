import api from '../services/api'

async function postFile(data, id, type) {
  data[type].forEach(async (levan) => {
    const Data = new FormData();
    Data.append('projectId', id)
    Data.append('type', type)
    Data.append('file', levan)
    await api.post('files', Data)
  })
}

export default postFile
