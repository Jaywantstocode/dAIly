

import { gql } from "@apollo/client";

/**
 * 
 * @param {*} id 
 * @returns 
 */
const Summary = (id) => gql`
  
`



/**
 * 
 * @param {*} id 
 * @returns 
 */
const DiaryByDate = (date) => {
  return gql`
  
  `;
}


/**

mutation{createDiary(
  userId: "VXNlcjo2M2NjYTZiNzdkM2Q1NzVlNGZiMDZiMmQ="
  input: {
    date: "2022-10-11"
  }
){
  diary{
    id
    date
    user{
      name
    }
    keyEvents
  }
}
}


 * @param {*} param0 
 */

/////////////////////


const CreateDiary = ({ input, id }) => {

}





/*

client
  .mutate({
    mutation: gql`
      mutation {
        createUser(input: { name: "jack", email: "jacky@gmail.com" }) {
          user {
            id
            email
            name
          }
        }
      }
    `,
  })
  .then((result) => console.log("RESULT -> ", result.data));


*/