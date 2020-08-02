https://www.youtube.com/watch?v=-bmdf1oATQo

# Testing react apps

> npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer

To test shallow rendering; without not deep diving into components use "shallow"
To test full dom rendering; with deep diving into components use "mount"
You can always check, what is assigned to the wrapper with

> console.log(wrapper.debug());

```
import { shallow, mount } from "enzyme";
describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    //wrapper = shallow(<Counter />);
    wrapper = mount(<App />);
    //console.log(wrapper.debug());
  })

  test("...", () => {});
```
