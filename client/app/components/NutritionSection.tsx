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

  const feedProducts = [
    {
      name: 'Chick Starter',
      description: 'High-protein feed designed for day-old chicks',
      age: 'Day-old',
      benefits: ['High protein', 'Immune boost', 'Healthy growth'],
    },
    {
      name: 'Chick Grower',
      description: 'Designed for chicks between 1-4 weeks old',
      age: '1-4 weeks',
      benefits: ['Growth promotion', 'Bone development', 'Balanced nutrition'],
    },
    {
      name: 'Pullet Developer',
      description: 'Designed for young pullets transitioning to laying',
      age: '5-16 weeks',
      benefits: ['Reproduction health', 'Skeletal strength', 'Development'],
    },
    {
      name: 'Layer Mash',
      description: 'Designed for laying hens',
      age: 'Laying phase',
      benefits: ['High calcium', 'Egg production', 'Shell strength'],
    },
    {
      name: 'Broiler Starter',
      description: 'High-protein feed designed for day-old broilers',
      age: 'Day-old',
      benefits: ['Rapid growth', 'Muscle development', 'High protein'],
    },
    {
      name: 'Broiler Grower',
      description: 'Designed for broilers between 1-4 weeks old',
      age: '1-4 weeks',
      benefits: ['Continuous growth', 'Feed efficiency', 'Weight gain'],
    },
    {
      name: 'Broiler Finisher',
      description: 'Designed for broilers between 4-6 weeks old',
      age: '4-6 weeks',
      benefits: ['Final growth phase', 'Meat quality', 'Weight optimization'],
    },
    {
      name: 'Pullet Developer',
      description: 'Formulated for optimum development',
      age: 'Youth phase',
      benefits: ['Skeletal strength', 'Balanced growth', 'Health'],
    },
  ];

  return (
    <Box
      component="section"
      id="nutrition"
      style={{
        background: 'white',
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
                  background: 'linear-gradient(135deg, #ffed1a, #ffa500)',
                  color: '#333',
                }}
              >
                Nutrition & Feed
              </Badge>
              <Text
                size="2.5rem"
                fw={800}
                style={{ color: '#1565c0' }}
              >
                The Importance of Nutrition in Poultry Farming
              </Text>
            </Stack>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={itemVariants} style={{ marginBottom: '60px' }}>
            <Group gap={20} mb={20}>
              <IconBrandFeedly size={32} color="#ffa500" />
              <div>
                <Text size="lg" fw={600} style={{ color: '#333' }}>
                  Nutrition is Key to Success
                </Text>
              </div>
            </Group>
            <Text size="lg" style={{ lineHeight: 1.8, color: '#555' }} maw={900}>
              At Brisken Limited, we believe that nutrition is the key to successful poultry
              farming. Our feed products are formulated to meet the nutritional needs of birds at
              every stage of their growth. We offer a range of feed products that are designed to
              promote healthy growth, improve feed efficiency, and enhance productivity.
            </Text>
          </motion.div>

          {/* Feed Products Grid */}
          <motion.div variants={itemVariants} style={{ marginBottom: '60px' }}>
            <Text fw={700} size="lg" mb={30} style={{ color: '#1565c0' }}>
              Our Feed Products
            </Text>

            <Grid gutter={24}>
              {feedProducts.map((product, idx) => (
                <Grid.Col key={idx} span={{ base: 12, sm: 6, md: 3 }}>
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
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                        border: '2px solid #e9ecef',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.6 }}
                        style={{
                          height: '4px',
                          background: 'linear-gradient(135deg, #ffa500, #ffed1a)',
                          borderRadius: '2px',
                          marginBottom: '12px',
                        }}
                      />

                      <Badge
                        size="sm"
                        style={{
                          background: '#42a5f5',
                          color: 'white',
                          width: 'fit-content',
                          marginBottom: '12px',
                        }}
                      >
                        {product.age}
                      </Badge>

                      <Text fw={700} size="md" mb={8} style={{ color: '#1565c0' }}>
                        {product.name}
                      </Text>

                      <Text size="sm" c="dimmed" mb={16}>
                        {product.description}
                      </Text>

                      <Stack gap={6}>
                        {product.benefits.map((benefit, i) => (
                          <Group key={i} gap={8}>
                            <div
                              style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#ffa500',
                              }}
                            />
                            <Text size="xs" style={{ color: '#555' }}>
                              {benefit}
                            </Text>
                          </Group>
                        ))}
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </motion.div>

          {/* Key Benefits */}
          <motion.div variants={itemVariants}>
            <Box
              style={{
                background: 'linear-gradient(135deg, #42a5f5 0%, #2196f3 100%)',
                borderRadius: '12px',
                padding: '40px',
                color: 'white',
              }}
            >
              <Group gap={20} mb={20}>
                <IconTrendingUp size={32} color="#ffed1a" />
                <Text fw={700} size="lg">
                  Benefits of Proper Nutrition
                </Text>
              </Group>
              <Grid gutter={20}>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Stack gap={8}>
                    <Text fw={600}>Healthy Growth</Text>
                    <Text size="sm" opacity={0.9}>
                      Proper nutrition ensures birds grow at optimal rates
                    </Text>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Stack gap={8}>
                    <Text fw={600}>Improved Productivity</Text>
                    <Text size="sm" opacity={0.9}>
                      Well-fed birds produce more eggs and better quality meat
                    </Text>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Stack gap={8}>
                    <Text fw={600}>Feed Efficiency</Text>
                    <Text size="sm" opacity={0.9}>
                      Optimized diets reduce waste and costs
                    </Text>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                  <Stack gap={8}>
                    <Text fw={600}>Disease Resistance</Text>
                    <Text size="sm" opacity={0.9}>
                      Strong immunity from quality nutrition prevents illness
                    </Text>
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
