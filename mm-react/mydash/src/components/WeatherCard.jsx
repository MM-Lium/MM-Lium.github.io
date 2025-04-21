import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Title, Text, Loader, Center } from '@mantine/core'
import { Select } from '@mantine/core'


export default function WeatherCard() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Taipei');

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: '7231f138cd5760f5b23b5d316b084eb2', // ✅ API key 放這
        units: 'metric',
        lang: 'zh_tw',
      }
    })
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [city]);

  if(loading) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Center><Loader /></Center>
      </Card>
    );
  }

  if (error) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Text color="red">{error.message}</Text>
      </Card>
    )
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Select 
        label="選擇城市"
        placeholder="請選擇"
        data={['Taipei', 'Tokyo', 'Seoul', 'New York', 'London']}
        value={city}
        onChange={(value) => {
          if (!value || value === city) return; // 👉 不做事
          setCity(value)
        }}
      />
      <Title order={3}>🌤 {weatherData.name}</Title>
      <Text size="lg" mt="sm">
        {weatherData.main.temp}°C - {weatherData.weather[0].description}
      </Text>
      <Text size="sm" color="dimmed">
        體感溫度：{weatherData.main.feels_like}°C
      </Text>
    </Card>
  )


}