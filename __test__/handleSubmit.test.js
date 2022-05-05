/**
 * @jest-environment jsdom
 */
import { handleSubmit } from '../src/client/js/formHandler';
// import { isValidHttpUrl } from '../src/client/js/formValidation';

test('Testing handlesubmit function', () => {
  document.body.innerHTML = `<form name="myForm" class="" onsubmit="return Client.handleSubmit(event)" >
    <input id="name" type="text" name="input" value=""  placeholder="Name">
    <input type="submit" id="subBttn"name="" value="submit"  >
</form>`;
  const event = { preventDefault: () => {} };
  const mockEvent = jest.spyOn(event, 'preventDefault');
  handleSubmit(event);
  expect(mockEvent).toHaveBeenCalled();
});
