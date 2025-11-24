'use client';

import { Container, Stack, Text, Box, Card, Grid, Badge, Group, List } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconAlertCircle, IconShield, IconFirstAidKit } from '@tabler/icons-react';

export function BiosecuritySection() {
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

  return (
    <Box
      component="section"
      id="sustainability"
      style={{
        background: '#fff',
        padding: '100px 0',
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
            <Stack gap={16} align="center">
              <Badge
                size="lg"
                variant="light"
                color="red"
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Health & Safety
              </Badge>
              <Text
                size="3rem"
                fw={800}
                style={{ color: '#1a1a1a', lineHeight: 1.2 }}
              >
                Biosecurity First
              </Text>
              <Text size="xl" c="dimmed" maw={700}>
                Protecting your flock is protecting your investment. We provide the tools and knowledge you need.
              </Text>
            </Stack>
          </motion.div>

          {/* Main Content Grid */}
          <Grid gutter={40}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div variants={itemVariants}>
                <Card
                  shadow="sm"
                  padding="xl"
                  radius="lg"
                  style={{
                    border: '1px solid #eee',
                    background: '#fff5f5',
                    height: '100%',
                  }}
                >
                  <Group mb={24}>
                    <Box
                      style={{
                        padding: '12px',
                        borderRadius: '12px',
                        background: '#ffebee'
                      }}
                    >
                      <IconShield size={32} color="#e53935" />
                    </Box>
                    <Text fw={700} size="xl" style={{ color: '#c62828' }}>
                      Prevention Measures
                    </Text>
                  </Group>

                  <Stack gap={16}>
                    <Group>
                      <IconShield size={20} color="#e53935" />
                      <Text size="lg" style={{ color: '#333' }}>Regular equipment sanitization</Text>
                    </Group>
                    <Group>
                      <IconShield size={20} color="#e53935" />
                      <Text size="lg" style={{ color: '#333' }}>Strict vaccination schedules</Text>
                    </Group>
                    <Group>
                      <IconShield size={20} color="#e53935" />
                      <Text size="lg" style={{ color: '#333' }}>Controlled farm access</Text>
                    </Group>
                    <Group>
                      <IconShield size={20} color="#e53935" />
                      <Text size="lg" style={{ color: '#333' }}>Pest control management</Text>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div variants={itemVariants}>
                <Card
                  shadow="sm"
                  padding="xl"
                  radius="lg"
                  style={{
                    border: '1px solid #eee',
                    background: '#e3f2fd',
                    height: '100%',
                  }}
                >
                  <Group mb={24}>
                    <Box
                      style={{
                        padding: '12px',
                        borderRadius: '12px',
                        background: '#bbdefb'
                      }}
                    >
                      <IconFirstAidKit size={32} color="#1e88e5" />
                    </Box>
                    <Text fw={700} size="xl" style={{ color: '#1565c0' }}>
                      Our Health Products
                    </Text>
                  </Group>

                  <Stack gap={16}>
                    <Group>
                      <IconFirstAidKit size={20} color="#1e88e5" />
                      <Text size="lg" style={{ color: '#333' }}>Disinfectants & Sanitizers</Text>
                    </Group>
                    <Group>
                      <IconFirstAidKit size={20} color="#1e88e5" />
                      <Text size="lg" style={{ color: '#333' }}>Vitamins & Supplements</Text>
                    </Group>
                    <Group>
                      <IconFirstAidKit size={20} color="#1e88e5" />
                      <Text size="lg" style={{ color: '#333' }}>Treatment Remedies</Text>
                    </Group>
                    <Group>
                      <IconFirstAidKit size={20} color="#1e88e5" />
                      <Text size="lg" style={{ color: '#333' }}>Brooder Equipment</Text>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* Alert Section */}
          <motion.div variants={itemVariants} style={{ marginTop: '60px' }}>
            <Box
              style={{
                background: '#fff3e0',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid #ffe0b2',
              }}
            >
              <Group gap={24} align="flex-start">
                <IconAlertCircle size={40} color="#f57c00" style={{ flexShrink: 0 }} />
                <Stack gap={8}>
                  <Text fw={700} size="lg" style={{ color: '#e65100' }}>
                    Early Detection is Critical
                  </Text>
                  <Text size="md" style={{ color: '#333' }}>
                    Watch for signs like depressed activity, ruffled feathers, or drop in feed intake. Contact us immediately if you suspect any health issues with your flock.
                  </Text>
                </Stack>
              </Group>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
