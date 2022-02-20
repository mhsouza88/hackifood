import { Container, Progress } from './styles';

interface SearchChartProps {
  food: string;
  percent: number;
  searches: string;
}

export function SearchChart({ food, percent, searches }: SearchChartProps) {
  return (
    <Container>
      <Progress percent={percent}>
        <span>{food}</span>
      </Progress>
      <span>{searches}</span>
    </Container>
  )
}
