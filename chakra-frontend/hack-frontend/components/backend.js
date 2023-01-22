import { gql } from "@apollo/client";

/**
 *
 * @param {*} id
 * @returns
 */
const Summary = (id) => gql``;

/**
 *
 * @param {*} id
 * @returns
 */
const DiaryByDate = (date) => {
  return gql``;
};

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

const CreateDiary = ({ input, id }) => {};

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

const QUERY_DIARIES = gql`
  query queryDiaries($id: ID, $startDate: Date, $endDate: Date) {
    diaries(id: $id, startDate: $startDate, endDate: $endDate) {
      edges {
        node {
          id
          date
          body
        }
      }
    }
  }
`;

const UPDATE_DIARY = gql`
  mutation updateDiary($diaryId: ID, $input: String!) {
    updateDiary(diaryId: $diaryId, input: { detail: $input }) {
      diary {
        id
        date
        keyEvents
        body
      }
    }
  }
`;

const CREATE_DIARY = gql`
  mutation CreateDiary($input: Date, $userId: ID) {
    createDiary(input: { date: $input }, userId: $userId) {
      diary {
        id
        date
        use {
          name
        }
        keyEvents
      }
    }
  }
`;

export { QUERY_DIARIES, UPDATE_DIARY, CREATE_DIARY };
