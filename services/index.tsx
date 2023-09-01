import request, { gql, GraphQLClient } from "graphql-request"

export const GetCarLists =async () => {
    const document = gql`
        query CarLists {
            carLists {
                image{
                    url
                }
                carAvg
                createdAt
                id
                name
                price
                carBrand
                carType
                publishedAt
                seat
                updatedAt
            }
        }
    `
    const result = await request('https://api-ap-south-1.hygraph.com/v2/cllv5o9dl0brv01t66in36vc5/master', document);
    return result
}

export const GetStoreLocation =async () => {
    const document = gql`
        query CarLists {
            storeLocations {
                address
            }
        }
    `
    const result = await request('https://api-ap-south-1.hygraph.com/v2/cllv5o9dl0brv01t66in36vc5/master', document);

    return result
}

export const CreateBooking = async(req: any): Promise<any> => {

    const mutation = gql`
        mutation MyMutation {
            createBooking(
            data: {
                location: "`+req.location+`",
                pickUpDate: "`+req.pickUpDate+`",
                dropOffDate: "`+req.dropOffDate+`",
                pickUpTime: "`+req.pickUpTime+`",
                dropOffTime: "`+req.dropOffTime+`",
                contactNumber: "`+req.contactNumber+`",
                userName: "`+req.userName+`",
                carId: {connect: {id: "`+req.carId+`"}}}
            ) {
                id
            }
        }
    `
    const result: any = await request('https://api-ap-south-1.hygraph.com/v2/cllv5o9dl0brv01t66in36vc5/master', mutation);
    if(result.createBooking.id) {
        const publishMutation = gql`
            mutation MyMutation {
                publishBooking(where: {id: "`+result.createBooking.id+`"}) {
                    id
                }
            }
        `
        const resultPublish = await request('https://api-ap-south-1.hygraph.com/v2/cllv5o9dl0brv01t66in36vc5/master', publishMutation);
        return resultPublish
    }
    return result
}



export const GetBooking = async() => {
    const document = gql`
        query MyQuery {
            bookings {
                contactNumber
                dropOffDate
                dropOffTime
                location
                pickUpDate
                pickUpTime
                userName
                carId {
                    carAvg
                    name
                    price
                    seat
                    carType
                    image {
                        url
                    }
                }
            }
        }
    `
    const result = await request('https://api-ap-south-1.hygraph.com/v2/cllv5o9dl0brv01t66in36vc5/master', document);
    return result
}