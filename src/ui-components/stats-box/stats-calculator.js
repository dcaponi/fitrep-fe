export const Avg = (props) => {
  let avg = 0;
  let sum = 0;
  if( props.input.length > 0 ){
    props.input.forEach( rating => {
      sum += rating.rating;
    } )
    avg = ( sum / props.input.length ).toFixed( 2 );
  }
  return avg;
}

export const Max = (props) => {
  let max = 0;
  if( props.input.length > 0 ){
    props.input.forEach( rating => {
      if( rating.rating > max ){
        max = rating.rating
      }
    } )
  }
  return max;
}

export const Min = (props) => {
  let min = 10;
  if( props.input.length > 0 ){
    props.input.forEach( rating => {
      if( rating.rating < min ){
        min = rating.rating
      }
    } )
  }
  return min;
}

export const TotalCount = (props) => {
  let total = 0;
  if( props.input ){
    total = props.input.length;
  }
  return total;
}

export const UniqCount = ( props ) => {
  let uniqRatingIps = new Set();
  if( props.input ){
    props.input.forEach( rating => {
      uniqRatingIps.add( rating.rater_ip );
    } )
  }
  return uniqRatingIps.size;
}
