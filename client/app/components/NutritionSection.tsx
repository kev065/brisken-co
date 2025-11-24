'use client';

import { Container, Stack, Text, Box, Card, Grid, Badge, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconBrandFeedly, IconTrendingUp } from '@tabler/icons-react';

export function NutritionSection() {
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

  const feedCategories = [
    {
      title: 'Chick Feeds',
      products: [
        { name: 'Chick Starter', age: 'Day-old' },
        { name: 'Chick Grower', age: '1-4 weeks' },
        { name: 'Pullet Developer', age: '5-16 weeks' },
      ],
    },
    {
      title: 'Layer Feeds',
      products: [
        { name: 'Layer Mash', age: 'Laying phase' },
      ],
    },
    {
      title: 'Broiler Feeds',
      products: [
        { name: 'Broiler Starter', age: 'Day-old' },
        { name: 'Broiler Grower', age: '1-4 weeks' },
        { name: 'Broiler Finisher', age: '4-6 weeks' },
      ],
    },
  ];

  return (
    <Box
      component="section"
      id="nutrition"
      style={{
        background: '#f8f9fa',
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
                color="green"
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Nutrition
              </Badge>
              <Text
                size="3rem"
                fw={800}
                style={{ color: '#1a1a1a', lineHeight: 1.2 }}
              >
                Premium Feed for Healthy Birds
              </Text>
              <Text size="xl" c="dimmed" maw={700}>
                Our feed is formulated to meet the nutritional needs of your flock at every stage of growth.
              </Text>
            </Stack>
          </motion.div>

          {/* Feed Categories Grid */}
          <Grid gutter={32} mb={80}>
            {feedCategories.map((category, idx) => (
              <Grid.Col key={idx} span={{ base: 12, md: 4 }}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    shadow="sm"
                    padding="xl"
                    radius="lg"
                    style={{
                      border: '1px solid #eee',
                      background: 'white',
                      height: '100%',
                    }}
                  >
                    <Group mb={24}>
                      <IconBrandFeedly size={32} color="#4caf50" />
                      <Text fw={700} size="xl" style={{ color: '#1a1a1a' }}>
                        {category.title}
                      </Text>
                    </Group>

                    <Stack gap={16}>
                      {category.products.map((product, pIdx) => (
                        <Group key={pIdx} justify="space-between">
                          <Text fw={500} style={{ color: '#333' }}>{product.name}</Text>
                          <Badge variant="dot" color="green">{product.age}</Badge>
                        </Group>
                      ))}
                    </Stack>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>

          {/* Benefits Section */}
          <motion.div variants={itemVariants}>
            <Box
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '60px',
                border: '1px solid #eee',
              }}
            >
              <Grid gutter={40} align="center">
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Stack gap={24}>
                    <Group gap={16}>
                      <Box
                        style={{
                          padding: '12px',
                          borderRadius: '12px',
                          background: '#e8f5e9'
                        }}
                      >
                        <IconTrendingUp size={32} color="#4caf50" />
                      </Box>
                      <Text fw={800} size="2rem" style={{ color: '#1a1a1a' }}>
                        Why Choose Our Feed?
                      </Text>
                    </Group>
                    <Text size="lg" c="dimmed">
                      Proper nutrition is the foundation of a successful poultry business. Our scientifically formulated feeds ensure:
                    </Text>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Grid gutter={20}>
                    <Grid.Col span={6}>
                      <Stack gap={8}>
                        <Text fw={700} size="lg" style={{ color: '#4caf50' }}>Faster Growth</Text>
                        <Text size="sm" c="dimmed">Optimal weight gain in shorter time</Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Stack gap={8}>
                        <Text fw={700} size="lg" style={{ color: '#4caf50' }}>Better Health</Text>
                        <Text size="sm" c="dimmed">Stronger immunity and lower mortality</Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Stack gap={8}>
                        <Text fw={700} size="lg" style={{ color: '#4caf50' }}>Higher Yield</Text>
                        <Text size="sm" c="dimmed">More eggs and better meat quality</Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Stack gap={8}>
                        <Text fw={700} size="lg" style={{ color: '#4caf50' }}>Cost Effective</Text>
                        <Text size="sm" c="dimmed">Better feed conversion ratio</Text>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
              </Grid>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
