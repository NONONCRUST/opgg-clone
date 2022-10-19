import React from 'react';
import { red } from '@styles/palette';
import Typography from '@components/common/Typography';

interface Props {
  string: string;
  keyword: string;
}

const HighlightedText: React.FC<Props> = ({ string, keyword }) => {
  const index = string.indexOf(keyword);

  return (
    <Typography>
      {index !== -1 && (
        <>
          {string.slice(0, index)}
          <span style={{ color: red[500] }}>{keyword}</span>
          {string.slice(index + keyword.length)}
        </>
      )}
      {index === -1 && <p>{string}</p>}
    </Typography>
  );
};

export default HighlightedText;
