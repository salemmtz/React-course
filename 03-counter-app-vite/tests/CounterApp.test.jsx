import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Test in CounterApp', () => {
  const value = 100;

  test('Should match snapshot', () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test('should show initial value 100', () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy();
    // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
    //   value.toString()
    // );
  });

  test('should increment with +1 button', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('101')).toBeTruthy();
  });

  test('should increment with -1 button', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('99')).toBeTruthy();
  });

  test('should work reset button', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect(screen.getByText(value.toString())).toBeTruthy();
  });
});
