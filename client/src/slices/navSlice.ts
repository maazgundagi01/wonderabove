import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notification {
  id: string;
  message: string;
  read: boolean;
  time:string;
}

interface NavState {
  username: string;
  imagePath: string;
  notifications: Notification[];
}

const initialState: NavState = {
  username: '',
  imagePath: '',
  notifications: [],
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setImagePath: (state, action: PayloadAction<string>) => {
      state.imagePath = action.payload;
    },
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    markNotificationAsRead: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find((n) => n.id === action.payload);
      if (notification) {
        notification.read = true;
      }
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const {
  setUsername,
  setImagePath,
  addNotification,
  markNotificationAsRead,
  clearNotifications,
} = navSlice.actions;

export default navSlice.reducer;
