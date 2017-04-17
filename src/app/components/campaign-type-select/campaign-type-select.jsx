import classnames from 'classnames';

const campaignTypes = [
  { name: 'One', value: 'OneValue' },
  { name: 'Two', value: 'TwoValue' },
  { name: 'Three', value: 'ThreeValue' }
];

const createCampaignOptions = (currentValue) => {
  return campaignTypes.map((type) => {
    return <option selected={ currentValue === type.value } value={ type.value }>{ type.name }</option>;
  });
};

const CampaignTypeSelect = (props) => {
  return (
    <div className='campaign-type-select'>
      <label htmlFor='campaign-type' className='col-form-label'>Typ</label>
      <select className='form-control' id='campaign-type' onChange={ props.onChange } value={ props.value }>
        <option>Kein Typ</option>
        { createCampaignOptions(props.value) }
        </select>
    </div>
  );
};

export default CampaignTypeSelect;
