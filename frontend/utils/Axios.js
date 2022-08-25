import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export const client = async (endpoint, data = {}, method = 'GET', contentType = 'application/json') => {

    const url = `${baseUrl}/${endpoint}`
    const token = localStorage['token'] || ''

    if (token) {
        if (method === 'GET') {
            try {
                const res = await axios(url, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                })
                return res?.data || res
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const res = await axios(url, {
                    method,
                    headers: {
                        'Content-Type': contentType,
                        authorization: `Bearer ${token}`,
                    },
                    data: contentType === 'application/json' ? JSON.stringify(data) : data,
                })
                return res?.data || res
            } catch (error) {
                return error
            }
        }
    }
}