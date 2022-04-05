import { render, screen } from '../../utils/reduxRender';
import { server } from '../../utils/mockServer';
import GamesCarousel from './GamesCarousel';

describe('<GamesCarousel>', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
    
  it('renders the initial text', () => {
    render(<GamesCarousel />);
    expect(screen.getByText('Games Carousel')).toBeInTheDocument();
  });
});