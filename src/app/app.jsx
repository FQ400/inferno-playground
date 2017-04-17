import Component from 'inferno-component';
import CampaignTypeSelect from './components/campaign-type-select/campaign-type-select';

class App extends Component {
  render() {
    return (
      <div>
        <CampaignTypeSelect value='TwoValue' />
      </div>
    );
  }
}

export default App;
