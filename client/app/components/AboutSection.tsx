'use client';

import { Container, Stack, Text, Box, Card, Group, Badge } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconPackage, IconTruck, IconCheckCircle } from '@tabler/icons-react';

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
      transition: { duration: 0.6, ease: 'easeOut' },
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
      icon: IconCheckCircle,
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
                About Us
              </Badge>
              <Text
                size="2.5rem"
                fw={800}
                style={{ color: '#1565c0' }}
              >
                Welcome to Brisken Limited
              </Text>
            </Stack>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} style={{ marginBottom: '40px' }}>
            <Text size="lg" style={{ lineHeight: 1.8, color: '#333' }} maw={800}>
              Brisken Limited is a Kenyan poultry company providing quality day-old chicks, eggs,
              and feed. We provide affordable, healthy produce to Kenyan families while supporting
              livelihoods and generating income opportunities.
            </Text>
          </motion.div>

          <motion.div variants={itemVariants} style={{ marginBottom: '60px' }}>
            <Text size="lg" style={{ lineHeight: 1.8, color: '#333' }} maw={800}>
              We're excited to introduce you to our hatchery and retail services, where you can
              find the latest hatch dates and availability schedules. Our eggs and poultry feed
              are in stock now. Simply call us for enquiries.
            </Text>
          </motion.div>

          {/* Features Grid */}
          <Group grow mb={60}>
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
                    padding="lg"
                    radius="md"
                    style={{
                      border: '2px solid #e9ecef',
                      background: 'white',
                      minHeight: '200px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
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
                        size={48}
                        color="#ffa500"
                        style={{ marginBottom: '12px' }}
                      />
                    </motion.div>
                    <Text fw={700} size="lg" mb={8}>
                      {feature.title}
                    </Text>
                    <Text size="sm" c="dimmed">
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
                borderRadius: '12px',
                padding: '40px',
                border: '2px solid #e9ecef',
              }}
            >
              <Text fw={700} size="lg" mb={24} style={{ color: '#1565c0' }}>
                Our Products and Services
              </Text>
              <Stack gap={20}>
                <motion.div variants={itemVariants}>
                  <Text fw={600} size="md" mb={12} style={{ color: '#ffa500' }}>
                    Main Products
                  </Text>
                  <Stack gap={8}>
                    <Text size="sm" style={{ color: '#333' }}>
                      ✓ Fresh and nutritious eggs
                    </Text>
                    <Text size="sm" style={{ color: '#333' }}>
                      ✓ High-quality day-old chicks
                    </Text>
                    <Text size="sm" style={{ color: '#333' }}>
                      ✓ Chick starter, grower, pullet developer
                    </Text>
                    <Text size="sm" style={{ color: '#333' }}>
                      ✓ Layer mash, broiler starter, grower, and finisher
                    </Text>
                  </Stack>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Text fw={600} size="md" mb={12} style={{ color: '#ffa500' }}>
                    Additional Services
                  </Text>
                  <Stack gap={8}>
                    <Text size="sm" style={{ color: '#333' }}>
                      ✓ Biosecurity and disinfectant products
                    </Text>
                    <Text size="sm" style={{ color: '#333' }}>
                      ✓ Brooder kits and accessories
                    </Text>
                    <Text size="sm" style={{ color: '#333' }}>
                      ✓ Feeders, waterers, and fencing
                    </Text>
                    <Text size="sm" style={{ color: '#333' }}>
                      ✓ Incubators and supplies
                    </Text>
                    <Text size="sm" style={{ color: '#333' }}>
                      ✓ Treatments, supplements, and remedies
                    </Text>
                  </Stack>
                </motion.div>
              </Stack>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
