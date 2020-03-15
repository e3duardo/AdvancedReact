# Advanced React and Redux: 2020 Edition

## Testing Design - What do we care about?

### App Component

- Shows the CommentBox inside of it
- Shows the CommentList inside of it

### CommentBox Component

- Shows a text area and a button
- Users can enter input into the textarea and submit it
- When the input is submitted, textarea should get emptied

### CommentList Component

- Shows one 'li' element per comment
- Text from each comment is visible

### Comments Reducer

- Properly hands actions with a type of 'SAVE_COMMENT'
- Doens't throw an error if it gets an action with any other type

### SaveComment Action

- Has a type of 'SAVE_COMMENT'
- Produces an action that has a playload of the new comment's text
