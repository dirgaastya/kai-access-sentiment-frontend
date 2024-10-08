import { defineStore } from 'pinia';
import axios from 'axios';

interface ISentiment {
  review: string;
  sentiment: string;
}
interface SentimentState {
  sentiment: string;
  loading: boolean;
  error: string | null;
  reviews: ISentiment[];
}

interface SentimentResponse {
  message: string;
  sentiment: string;
  status: string;
}

export const useSentimentStore = defineStore('sentiment', {
  state: (): SentimentState => ({
    sentiment: '',
    loading: false,
    error: null,
    reviews: [],
  }),
  actions: {
    async fetchSentiment(text: string) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post<SentimentResponse>(
          'http://127.0.0.1:5000/predict',
          {
            text,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        this.sentiment = response.data.sentiment;
      } catch (err) {
        this.error = 'An error occurred while fetching sentiment';
      } finally {
        this.loading = false;
      }
    },
  },
});
