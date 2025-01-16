/**
 * API = Factory qui permet d'instancier soit APIFetch soit APIMock pour changer la source de données
 */

class API {
    constructor(){
        const useMock = true //TODO: utiliser une variable de configuration pour éviter de toucher le code        
        this.api = (useMock) ? new APIMock() : new APIFetch()
    }

    getUser(id){
        return this.api.getUser(id)
    }

    getAverageSessions(id){
        return this.api.getAverageSessions(id)
    }

    getPerformance(id){
        return this.api.getPerformance(id)
    }

    getActivity(id){
        return this.api.getActivity(id)
    }
    

}


class APIFetch {
    async getUser(id){        
        return fetch(`http://localhost:3000/user/${id}`)
    }

    async getAverageSessions(id){
       return fetch(`http://localhost:3000/user/${id}/average-sessions`)
    }

    async getPerformance(id){
       return fetch(`http://localhost:3000/user/${id}/performance`)
    }

    async getActivity(id){
        return fetch(`http://localhost:3000/user/${id}/activity`)
    }
}

class APIMock {
    getUser(id){        
        const data = [
            {
                id: 12,
                userInfos: {
                    firstName: 'Karl Mock',
                    lastName: 'Dovineau',
                    age: 31,
                },
                todayScore: 0.12,
                keyData: {
                    calorieCount: 1930,
                    proteinCount: 155,
                    carbohydrateCount: 290,
                    lipidCount: 50
                }
            },
            {
                id: 18,
                userInfos: {
                    firstName: 'Cecilia Mock',
                    lastName: 'Ratorez',
                    age: 34,
                },
                todayScore: 0.3,
                keyData: {
                    calorieCount: 2500,
                    proteinCount: 90,
                    carbohydrateCount: 150,
                    lipidCount: 120
                }
            }
        ]
        return Promise.resolve({data: data.find(o => o.id === id)})
    }

    getAverageSessions(id){
        const data = [
            {
                userId: 12,
                sessions: [
                    {
                        day: 1,
                        sessionLength: 30
                    },
                    {
                        day: 2,
                        sessionLength: 23
                    },
                    {
                        day: 3,
                        sessionLength: 45
                    },
                    {
                        day: 4,
                        sessionLength: 50
                    },
                    {
                        day: 5,
                        sessionLength: 0
                    },
                    {
                        day: 6,
                        sessionLength: 0
                    },
                    {
                        day: 7,
                        sessionLength: 60
                    }
                ]
            },
            {
                userId: 18,
                sessions: [
                    {
                        day: 1,
                        sessionLength: 30
                    },
                    {
                        day: 2,
                        sessionLength: 40
                    },
                    {
                        day: 3,
                        sessionLength: 50
                    },
                    {
                        day: 4,
                        sessionLength: 30
                    },
                    {
                        day: 5,
                        sessionLength: 30
                    },
                    {
                        day: 6,
                        sessionLength: 50
                    },
                    {
                        day: 7,
                        sessionLength: 50
                    }
                ]
            }
        ]
        return Promise.resolve({data: data.find(d => d.userId === id)})

    }

    getPerformance(id){
        const data = [
            {
                userId: 12,
                kind: {
                    1: 'cardio',
                    2: 'energy',
                    3: 'endurance',
                    4: 'strength',
                    5: 'speed',
                    6: 'intensity'
                },
                data: [
                    {
                        value: 80,
                        kind: 1
                    },
                    {
                        value: 120,
                        kind: 2
                    },
                    {
                        value: 140,
                        kind: 3
                    },
                    {
                        value: 50,
                        kind: 4
                    },
                    {
                        value: 200,
                        kind: 5
                    },
                    {
                        value: 90,
                        kind: 6
                    }
                ]
            },
            {
                userId: 18,
                kind: {
                    1: 'cardio',
                    2: 'energy',
                    3: 'endurance',
                    4: 'strength',
                    5: 'speed',
                    6: 'intensity'
                },
                data: [
                    {
                        value: 200,
                        kind: 1
                    },
                    {
                        value: 240,
                        kind: 2
                    },
                    {
                        value: 80,
                        kind: 3
                    },
                    {
                        value: 80,
                        kind: 4
                    },
                    {
                        value: 220,
                        kind: 5
                    },
                    {
                        value: 110,
                        kind: 6
                    }
                ]
            }
        ]

        return Promise.resolve({data: data.find(d => d.userId === id)})
    }

    getActivity(id){
        const data = [
            {
                userId: 12,
                sessions: [
                    {
                        day: '2020-07-01',
                        kilogram: 80,
                        calories: 240
                    },
                    {
                        day: '2020-07-02',
                        kilogram: 80,
                        calories: 220
                    },
                    {
                        day: '2020-07-03',
                        kilogram: 81,
                        calories: 280
                    },
                    {
                        day: '2020-07-04',
                        kilogram: 81,
                        calories: 290
                    },
                    {
                        day: '2020-07-05',
                        kilogram: 80,
                        calories: 160
                    },
                    {
                        day: '2020-07-06',
                        kilogram: 78,
                        calories: 162
                    },
                    {
                        day: '2020-07-07',
                        kilogram: 76,
                        calories: 390
                    }
                ]
            },
            {
                userId: 18,
                sessions: [
                    {
                        day: '2020-07-01',
                        kilogram: 70,
                        calories: 240
                    },
                    {
                        day: '2020-07-02',
                        kilogram: 69,
                        calories: 220
                    },
                    {
                        day: '2020-07-03',
                        kilogram: 70,
                        calories: 280
                    },
                    {
                        day: '2020-07-04',
                        kilogram: 70,
                        calories: 500
                    },
                    {
                        day: '2020-07-05',
                        kilogram: 69,
                        calories: 160
                    },
                    {
                        day: '2020-07-06',
                        kilogram: 69,
                        calories: 162
                    },
                    {
                        day: '2020-07-07',
                        kilogram: 69,
                        calories: 390
                    }
                ]
            }
        ]

        return Promise.resolve({data: data.find(d => d.userId === id)})
    }
}





export default API;