import Icon from '../components/Icon';

const KontakButton = ({ data }) => {
  const { nama, icon, link, value } = data;
  return (
    <a href={link} className="btn" key={nama}>
      <Icon name={icon} size={20} />
      <span>{value}</span>
    </a>
  );
};

export default KontakButton;
