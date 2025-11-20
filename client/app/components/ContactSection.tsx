'use client';

import {
  Container,
  Stack,
  Text,
  Box,
  Group,
  Badge,
  Card,
  TextInput,
  Textarea,
  Button,
  Grid,
  Notification,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { IconPhone, IconMapPin, IconClock } from '@tabler/icons-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactMethods = [
    {
      icon: IconPhone,
      title: 'Phone',
      value: '+254 769 412626',
      desc: 'Available during business hours',
    },
    {
      icon: IconMapPin,
      title: 'Location',
      value: 'P.O BOX 7682 -30100',
      desc: 'Eldoret, Kenya',
    },
    {
      icon: IconClock,
      title: 'Hours',
      value: 'Monday - Friday',
      desc: '8:00 AM - 5:00 PM',
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formDataToSubmit = new FormData(e.currentTarget);
      formDataToSubmit.append('access_key', 'e217281f-07b1-4b01-a421-01d9529ddba2');

      const object = Object.fromEntries(formDataToSubmit);
      const json = JSON.stringify(object);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! We will contact you shortly.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      style={{
        background: 'linear-gradient(135deg, #2196f3 0%, #42a5f5 100%)',
        padding: '80px 0',
        color: 'white',
      }}
    >
      <Container size="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} style={{ marginBottom: '60px', textAlign: 'center' }}>
            <Stack gap={12} align="center">
              <Text
                size="2.5rem"
                fw={800}
                style={{
                  background: 'linear-gradient(135deg, #ffed1a 0%, #fff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Contact Us
              </Text>
              <Text size="lg" opacity={0.95}>
                Have questions? Reach out to us and we'll get back to you as soon as possible
              </Text>
            </Stack>
          </motion.div>

          {/* Contact Methods Grid */}
          <Grid gutter={24} mb={60}>
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <Grid.Col key={idx} span={{ base: 12, sm: 6, md: 4 }}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        textAlign: 'center',
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        viewport={{ once: true }}
                      >
                        <Icon
                          size={40}
                          color="#ffed1a"
                          style={{ margin: '0 auto 12px' }}
                        />
                      </motion.div>

                      <Text fw={700} size="lg" mb={8}>
                        {method.title}
                      </Text>
                      {method.title === 'Phone' ? (
                        <a href="tel:+254769412626" style={{ textDecoration: 'none', color: 'inherit' }}>
                          <Text size="sm" fw={600} mb={4} style={{ cursor: 'pointer' }}>
                            {method.value}
                          </Text>
                        </a>
                      ) : (
                        <Text size="sm" fw={600} mb={4}>
                          {method.value}
                        </Text>
                      )}
                      <Text size="sm" opacity={0.8}>
                        {method.desc}
                      </Text>
                    </Card>
                  </motion.div>
                </Grid.Col>
              );
            })}
          </Grid>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card
              shadow="sm"
              padding="xl"
              radius="md"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              <form onSubmit={handleSubmit}>
                <Stack gap={20}>
                  <div>
                    <Text fw={700} size="lg" style={{ color: '#1565c0' }} mb={12}>
                      Send us a Message
                    </Text>
                    <Text size="sm" c="dimmed" mb={24}>
                      Fill out the form below and we'll contact you shortly
                    </Text>
                  </div>

                  {submitStatus.type && (
                    <Notification
                      color={submitStatus.type === 'success' ? 'green' : 'red'}
                      title={submitStatus.type === 'success' ? 'Success' : 'Error'}
                      onClose={() => setSubmitStatus({ type: null, message: '' })}
                    >
                      {submitStatus.message}
                    </Notification>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <TextInput
                      label="Full Name"
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.currentTarget.value })}
                      radius="md"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <TextInput
                      label="Email Address"
                      placeholder="your.email@example.com"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.currentTarget.value })}
                      radius="md"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <TextInput
                      label="Phone Number"
                      placeholder="Your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.currentTarget.value })}
                      radius="md"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <Textarea
                      label="Message"
                      placeholder="Tell us how we can help"
                      name="message"
                      minRows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.currentTarget.value })
                      }
                      radius="md"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      radius="md"
                      fullWidth
                      loading={isLoading}
                      disabled={isLoading}
                      style={{
                        background: 'linear-gradient(135deg, #ffa500, #ff8c00)',
                        border: 'none',
                      }}
                      fw={600}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </Stack>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
