'use client';

import { Container, Stack, Text, Box, Card, Grid, Badge, Group, Button } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconBulb, IconTrendingUp, IconUsers, IconTarget } from '@tabler/icons-react';

export function ExploreSection() {
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

  const opportunities = [
    {
      icon: IconUsers,
      title: 'Farmer Partnerships',
      description: 'Access quality chicks and support to grow your farm.',
    },
    {
      icon: IconTarget,
      title: 'Retail & Distribution',
      description: 'Become a retailer and tap into the poultry market.',
    },
    {
      icon: IconTrendingUp,
      title: 'Feed Dealers',
      description: 'Supply premium feed to farmers in your area.',
    },
    {
      icon: IconBulb,
      title: 'Custom Solutions',
      description: 'Tailored feed formulations for specific needs.',
    },
  ];

  return (
    <Box
      component="section"
      id="opportunities"
      style={{
        background: 'white',
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
                color="orange"
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Opportunities
              </Badge>
              <Text
                size="3rem"
                fw={800}
                style={{ color: '#1a1a1a', lineHeight: 1.2 }}
              >
                Grow With Brisken
              </Text>
              <Text size="xl" c="dimmed" maw={700}>
                We create opportunities for farmers, retailers, and businesses to thrive in the poultry industry.
              </Text>
            </Stack>
          </motion.div>

          {/* Opportunities Grid */}
          <Grid gutter={32} mb={80}>
            {opportunities.map((opp, idx) => {
              const Icon = opp.icon;
              return (
                <Grid.Col key={idx} span={{ base: 12, sm: 6, md: 3 }}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -12 }}
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
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        viewport={{ once: true }}
                      >
                        <div
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '16px',
                            background: '#fff4e6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '24px',
                          }}
                        >
                          <Icon size={32} color="#ffa500" />
                        </div>
                      </motion.div>

                      <Text fw={700} size="lg" mb={12} style={{ color: '#1a1a1a' }}>
                        {opp.title}
                      </Text>

                      <Text size="md" c="dimmed">
                        {opp.description}
                      </Text>
                    </Card>
                  </motion.div>
                </Grid.Col>
              );
            })}
          </Grid>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <Box
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
                borderRadius: '24px',
                padding: '60px',
                textAlign: 'center',
                color: 'white',
              }}
            >
              <Stack gap={24} align="center">
                <Text fw={800} size="2.5rem">
                  Ready to Partner With Us?
                </Text>
                <Text size="xl" style={{ color: '#ccc' }} maw={600}>
                  Contact us today to explore partnership opportunities and take your business to the next level.
                </Text>
                <Button
                  component="a"
                  href="tel:+254769412626"
                  size="xl"
                  radius="md"
                  style={{
                    background: '#ffa500',
                    color: 'white',
                    border: 'none',
                  }}
                  fw={700}
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
