# Advanced React and Redux: 2020 Edition

## Testing Design - What do we care about?

### App Component

- [x] Shows the CommentBox inside of it
- [x] Shows the CommentList inside of it

### CommentBox Component

- [x] Shows a text area and a button
- [x] Users can enter input into the textarea and submit it
- [x] When the input is submitted, textarea should get emptied

### CommentList Component

- [x] Shows one 'li' element per comment
- [x] Text from each comment is visible

### Comments Reducer

- [x] Properly hands actions with a type of 'SAVE_COMMENT'
- [x] Doens't throw an error if it gets an action with any other type

### SaveComment Action

- [x] Has a type of 'SAVE_COMMENT'
- [x] Produces an action that has a playload of the new comment's text

## Integrations Tests

- [x] Can fetch a list of comments and display them
