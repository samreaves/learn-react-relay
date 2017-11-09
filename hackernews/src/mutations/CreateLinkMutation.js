import {
  commitMutation,
  graphql
} from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '../environment';

const mutation = graphql`
  mutation CreateLinkMutation($input: CreateLinkInput!){
    createLink(input: $input) {
      link {
        id
        createdAt
        url
        description
      }
    }
  }
`;

export default (description, url, successCallback, errorCallback) => {

  const variables = {
    input: {
      description,
      url,
      clientMutationId: ""
    }
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        successCallback();
      },
      onError: () => errorCallback()
    }
  );
};
