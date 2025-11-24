'use client';

import { Container, Stack, Text, Box, Card, Group, Badge, Grid } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconPackage, IconTruck, IconCircleCheck } from '@tabler/icons-react';

export function AboutSection() {
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

  const features = [
    {
      icon: IconPackage,
      title: 'Quality Products',
      description: 'Fresh eggs, day-old chicks, and premium feed',
    },
    {
      icon: IconTruck,
      title: 'Reliable Service',
      description: 'Fast delivery and consistent availability',
    },
    {
      icon: IconCircleCheck,
      title: 'Trusted Partner',
      description: 'Supporting Kenyan farmers for years',
    },
  ];

  return (
    <Box
      component="section"
      id="about"
      style={{
        background: '#f8f9fa',
        padding: '100px 0',
      }}
    >
      <Container size="lg">
        <motion.div
          variants={containerVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} style={{ marginBottom: '60px', textAlign: 'center' }}>
            <Stack gap={16} align="center">
              <Badge
                size="lg"
                variant="light"
                color="blue"
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                About Us
              </Badge>
              <Text
                size="3rem"
                fw={800}
                style={{ color: '#1a1a1a', lineHeight: 1.2 }}
              >
                Welcome to Brisken Limited
              </Text>
              <Text size="xl" c="dimmed" maw={700}>
                Your trusted partner in poultry production. We provide quality day-old chicks, eggs, and feed to support Kenyan families and farmers.
              </Text>
            </Stack>
          </motion.div>

          {/* Features Grid */}
          <Group grow mb={80}>
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Card
                    shadow="sm"
                    padding="xl"
                    radius="lg"
                    style={{
                      border: '1px solid #eee',
                      background: 'white',
                      height: '100%',
                      textAlign: 'center',
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        style={{
                          display: 'inline-flex',
                          padding: '16px',
                          borderRadius: '50%',
                          background: '#fff4e6',
                          marginBottom: '20px'
                        }}
                      >
                        <Icon
                          size={32}
                          color="#ffa500"
                        />
                      </Box>
                    </motion.div>
                    <Text fw={700} size="xl" mb={8} c="dark">
                      {feature.title}
                    </Text>
                    <Text size="md" c="dimmed">
                      {feature.description}
                    </Text>
                  </Card>
                </motion.div>
              );
            })}
          </Group>

          {/* Products Grid */}
          <motion.div variants={itemVariants}>
            <Box
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '60px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              }}
            >
              <Grid gutter={60}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Text fw={800} size="2rem" mb={24} style={{ color: '#1a1a1a' }}>
                    Our Products
                  </Text>
                  <Stack gap={16}>
                    <Group>
                      <IconCircleCheck size={24} color="#ffa500" />
                      <Text size="lg" fw={500}>Fresh and nutritious eggs</Text>
                    </Group>
                    <Group>
                      <IconCircleCheck size={24} color="#ffa500" />
                      <Text size="lg" fw={500}>High-quality day-old chicks</Text>
                    </Group>
                    <Group>
                      <IconCircleCheck size={24} color="#ffa500" />
                      <Text size="lg" fw={500}>Complete range of poultry feed</Text>
                    </Group>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Text fw={800} size="2rem" mb={24} style={{ color: '#1a1a1a' }}>
                    Our Services
                  </Text>
                  <Stack gap={16}>
                    <Group>
                      <IconCircleCheck size={24} color="#2196f3" />
                      <Text size="lg" fw={500}>Biosecurity consultation</Text>
                    </Group>
                    <Group>
                      <IconCircleCheck size={24} color="#2196f3" />
                      <Text size="lg" fw={500}>Equipment and accessories</Text>
                    </Group>
                    <Group>
                      <IconCircleCheck size={24} color="#2196f3" />
                      <Text size="lg" fw={500}>Expert farming advice</Text>
                    </Group>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
