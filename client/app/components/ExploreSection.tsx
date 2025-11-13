'use client';

import { Container, Stack, Text, Box, Card, Grid, Badge, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconLightbulb, IconTrendingUp, IconUsers, IconTarget } from '@tabler/icons-react';

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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const opportunities = [
    {
      icon: IconUsers,
      title: 'Farmer Partnerships',
      description:
        'Partner with us to access quality chicks, feed, and support. Grow your farm profitably with our proven systems.',
      features: [
        'Reliable supply chain',
        'Technical support',
        'Competitive pricing',
        'Regular training',
      ],
    },
    {
      icon: IconTarget,
      title: 'Retail & Distribution',
      description:
        'Become a Brisken retailer and tap into the growing poultry market. Enjoy good margins and dedicated support.',
      features: [
        'Wholesale pricing',
        'Marketing support',
        'Territory protection',
        'Training programs',
      ],
    },
    {
      icon: IconTrendingUp,
      title: 'Feed Dealers',
      description:
        'Supply quality feed to farmers in your area. Build a sustainable business with Brisken premium products.',
      features: [
        'High-quality products',
        'Fleet support',
        'Promotional materials',
        'Growth incentives',
      ],
    },
    {
      icon: IconLightbulb,
      title: 'Custom Solutions',
      description:
        'Looking for something specific? We offer custom feed formulations and tailored packages for unique needs.',
      features: ['Customized feed', 'Bulk orders', 'Flexible terms', 'Expert advice'],
    },
  ];

  return (
    <Box
      component="section"
      id="opportunities"
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
                  background: 'linear-gradient(135deg, #ffa500, #ffed1a)',
                  color: '#333',
                }}
              >
                Opportunities
              </Badge>
              <Text
                size="2.5rem"
                fw={800}
                style={{ color: '#1565c0' }}
              >
                Grow With Brisken
              </Text>
              <Text size="lg" c="dimmed" maw={700}>
                We're committed to creating opportunities for farmers, retailers, and businesses
                to thrive in the poultry industry.
              </Text>
            </Stack>
          </motion.div>

          {/* Opportunities Grid */}
          <Grid gutter={24} mb={60}>
            {opportunities.map((opp, idx) => {
              const Icon = opp.icon;
              return (
                <Grid.Col key={idx} span={{ base: 12, sm: 6, md: 6 }}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      style={{
                        border: '2px solid #e9ecef',
                        background: 'white',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        viewport={{ once: true }}
                      >
                        <div
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, #ffa500, #ffed1a)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px',
                          }}
                        >
                          <Icon size={32} color="white" />
                        </div>
                      </motion.div>

                      <Text fw={700} size="lg" mb={8} style={{ color: '#1565c0' }}>
                        {opp.title}
                      </Text>

                      <Text size="sm" c="dimmed" mb={20}>
                        {opp.description}
                      </Text>

                      <Stack gap={8} style={{ marginTop: 'auto' }}>
                        <Text fw={600} size="sm" style={{ color: '#ffa500' }}>
                          Key Benefits:
                        </Text>
                        {opp.features.map((feature, i) => (
                          <Group key={i} gap={8}>
                            <div
                              style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#2196f3',
                              }}
                            />
                            <Text size="sm" style={{ color: '#555' }}>
                              {feature}
                            </Text>
                          </Group>
                        ))}
                      </Stack>
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
                background: 'linear-gradient(135deg, #ffa500 0%, #ffed1a 100%)',
                borderRadius: '12px',
                padding: '40px',
                textAlign: 'center',
              }}
            >
              <Stack gap={16} align="center">
                <Text fw={700} size="lg" style={{ color: '#333' }}>
                  Ready to Grow With Us?
                </Text>
                <Text size="lg" style={{ color: '#555' }}>
                  Contact us today to explore partnership opportunities and take your business to
                  the next level.
                </Text>
                <Text fw={600} style={{ color: '#1565c0', fontSize: '1.2rem' }}>
                  Call us now for more information!
                </Text>
              </Stack>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
