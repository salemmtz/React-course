import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test in FirstApp', () => {
  // test('Should make match with the snapshot', () => {
  //   const title = 'Hi, I am Salem';
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test('Should show title in a h1', () => {
    const title = 'Hi, I am Salem';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // // console.log(h1.innerHTML);
    // expect(h1.innerHTML).toContain(title);

    // .toBe() checks that the tag is the same. it checks spaces, all
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('should show subtitle sent by props', () => {
    const title = 'I am Salem';
    const subtitle = 'Soy un subtitulo';
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(3);
  });
});
