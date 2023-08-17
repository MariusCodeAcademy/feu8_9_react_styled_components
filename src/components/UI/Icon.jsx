import styled from 'styled-components';

export default function Icon(props) {
  return (
    <div>
      <i className={`fa fa-${props.children}`} aria-hidden='true'></i>
    </div>
  );
}
