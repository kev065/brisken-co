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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const diseasesSigns = [
    'Depressed activity',
    'Ruffled feathers',
    'Breathing problems',
    'Diarrhea or other manure issues',
    'Nasal discharge or eye build-up',
    'Drop in feed intake',
    'Swelling around joints',
    'Drop in production',
  ];

  return (
    <Box
      component="section"
      id="sustainability"
      style={{
        background: '#f8f9fa',
        padding: '80px 0',
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
          <motion.div variants={itemVariants} style={{ marginBottom: '60px' }}>
            <Stack gap={12} align="flex-start">
              <Badge
                size="lg"
                style={{
                  background: 'linear-gradient(135deg, #ffa500, #ffed1a)',
                  color: '#333',
                }}
              >
                Health & Safety
              </Badge>
              <Text
                size="2.5rem"
                fw={800}
                style={{ color: '#1565c0' }}
              >
                Biosecurity and Disease Prevention
              </Text>
            </Stack>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={itemVariants} style={{ marginBottom: '60px' }}>
            <Group gap={20} mb={20}>
              <IconShield size={32} color="#ffa500" />
              <div>
                <Text size="lg" fw={600} style={{ color: '#333' }}>
                  Preventing Disease Through Best Practices
                </Text>
              </div>
            </Group>
            <Text size="lg" style={{ lineHeight: 1.8, color: '#555' }} maw={900}>
              Biosecurity is critical in poultry farming. It involves taking measures to prevent
              the spread of disease and promote a healthy environment for birds. We recommend
              simple actions like sanitizing equipment, vaccinating birds, and controlling pests
              to prevent disease.
            </Text>
          </motion.div>

          {/* Key Practices Grid */}
          <motion.div variants={itemVariants} style={{ marginBottom: '60px' }}>
            <Grid gutter={24}>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    style={{
                      border: '2px solid #e9ecef',
                      background: 'white',
                    }}
                  >
                    <Group gap={16} mb={16}>
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '8px',
                          background: 'rgba(255, 165, 0, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconShield size={32} color="#ffa500" />
                      </div>
                      <div>
                        <Text fw={700} size="lg" style={{ color: '#1565c0' }}>
                          Biosecurity Measures
                        </Text>
                      </div>
                    </Group>

                    <Stack gap={12}>
                      <Group gap={8}>
                        <Text size="sm" fw={600} style={{ color: '#ffa500' }}>
                          ✓
                        </Text>
                        <Text size="sm" style={{ color: '#555' }}>
                          Sanitize all equipment regularly
                        </Text>
                      </Group>
                      <Group gap={8}>
                        <Text size="sm" fw={600} style={{ color: '#ffa500' }}>
                          ✓
                        </Text>
                        <Text size="sm" style={{ color: '#555' }}>
                          Vaccinate birds according to schedule
                        </Text>
                      </Group>
                      <Group gap={8}>
                        <Text size="sm" fw={600} style={{ color: '#ffa500' }}>
                          ✓
                        </Text>
                        <Text size="sm" style={{ color: '#555' }}>
                          Control pest populations
                        </Text>
                      </Group>
                      <Group gap={8}>
                        <Text size="sm" fw={600} style={{ color: '#ffa500' }}>
                          ✓
                        </Text>
                        <Text size="sm" style={{ color: '#555' }}>
                          Maintain clean water sources
                        </Text>
                      </Group>
                      <Group gap={8}>
                        <Text size="sm" fw={600} style={{ color: '#ffa500' }}>
                          ✓
                        </Text>
                        <Text size="sm" style={{ color: '#555' }}>
                          Restrict visitor access to farm areas
                        </Text>
                      </Group>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    style={{
                      border: '2px solid #e9ecef',
                      background: 'linear-gradient(135deg, #fff4e6 0%, #fff9e6 100%)',
                    }}
                  >
                    <Group gap={16} mb={16}>
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '8px',
                          background: 'rgba(33, 150, 243, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconFirstAidKit size={32} color="#2196f3" />
                      </div>
                      <div>
                        <Text fw={700} size="lg" style={{ color: '#1565c0' }}>
                          Available Products
                        </Text>
                      </div>
                    </Group>

                    <Stack gap={12}>
                      <Group gap={8}>
                        <Text size="sm" fw={600} style={{ color: '#2196f3' }}>
                          ✓
                        </Text>
                        <Text size="sm" style={{ color: '#555' }}>
                          Biosecurity and disinfectant products
                        </Text>
                      </Group>
                      <Group gap={8}>
                        <Text size="sm" fw={600} style={{ color: '#2196f3' }}>
                          ✓
                        </Text>
                        <Text size="sm" style={{ color: '#555' }}>
                          Treatments and supplements
                        </Text>
                      </Group>
                      <Group gap={8}>
                        <Text size="sm" fw={600} style={{ color: '#2196f3' }}>
                          ✓
                        </Text>
                        <Text size="sm" style={{ color: '#555' }}>
                          Remedies for common issues
                        </Text>
                      </Group>
                      <Group gap={8}>
                        <Text size="sm" fw={600} style={{ color: '#2196f3' }}>
                          ✓
                        </Text>
                        <Text size="sm" style={{ color: '#555' }}>
                          Brooder kits and accessories
                        </Text>
                      </Group>
                      <Group gap={8}>
                        <Text size="sm" fw={600} style={{ color: '#2196f3' }}>
                          ✓
                        </Text>
                        <Text size="sm" style={{ color: '#555' }}>
                          Pumps and medicators
                        </Text>
                      </Group>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid.Col>
            </Grid>
          </motion.div>

          {/* Disease Signs Alert */}
          <motion.div variants={itemVariants}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              style={{
                background: 'linear-gradient(135deg, #ffebee 0%, #fff3e0 100%)',
                border: '2px solid #ffcdd2',
              }}
            >
              <Group gap={16} mb={24}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '8px',
                    background: 'rgba(255, 87, 34, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconAlertCircle size={32} color="#ff5722" />
                </div>
                <div>
                  <Text fw={700} size="lg" style={{ color: '#c62828' }}>
                    Common Signs of Disease
                  </Text>
                  <Text size="sm" c="dimmed">
                    If you notice any of these signs, it's essential to act immediately
                  </Text>
                </div>
              </Group>

              <Grid gutter={24}>
                {diseasesSigns.map((sign, idx) => (
                  <Grid.Col key={idx} span={{ base: 12, sm: 6, md: 4 }}>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Group gap={12}>
                        <div
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#ff5722',
                            flexShrink: 0,
                          }}
                        />
                        <Text size="sm" style={{ color: '#555' }}>
                          {sign}
                        </Text>
                      </Group>
                    </motion.div>
                  </Grid.Col>
                ))}
              </Grid>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
