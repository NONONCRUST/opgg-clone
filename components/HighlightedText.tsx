import React from "react";
import { red } from "../styles/palette";
import Typography from "./common/Typography";

interface Props {
  string: string;
  keyword: string;
}

const HighlightedText: React.FC<Props> = ({ string, keyword }) => {
  const index = string.indexOf(keyword);

  return (
    <Typography>
      {string.slice(0, index)}
      <span style={{ color: red[500] }}>{keyword}</span>
      {string.slice(index + keyword.length)}
    </Typography>
  );
};

export default HighlightedText;
