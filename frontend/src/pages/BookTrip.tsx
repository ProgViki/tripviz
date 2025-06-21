import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useBookTripMutation } from '../features/trips/tripApi';

const BookTripPage = () => {
  const [bookTrip] = useBookTripMutation();

  const onFinish = async (values: any) => {
    await bookTrip(values);
    alert('Trip booked!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card title="Book a Trip" className="w-full max-w-md">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="pickup" label="Pickup Location" rules={[{ required: true }]}> <Input /> </Form.Item>
          <Form.Item name="destination" label="Destination" rules={[{ required: true }]}> <Input /> </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>Book Trip</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default BookTripPage;