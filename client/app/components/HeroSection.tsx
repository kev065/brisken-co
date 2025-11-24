'use client';

import { Container, Box, Text, Stack, Button, Group } from '@mantine/core';
import { motion } from 'framer-motion';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      style={{
        color: 'white',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background image with overlay */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/hero_poultry_farm.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 1,
          zIndex: 0,
        }}
      />

      {/* Darker overlay for better text contrast */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
          zIndex: 0,
        }}
      />

      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Stack gap={24} maw={700}>
            <motion.div variants={itemVariants}>
              <Text
                size="4.5rem"
                fw={900}
                lh={1.1}
                c="white"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  textShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
                  letterSpacing: '-0.02em',
                }}
              >
                Premium Poultry for Kenyan Families
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text
                size="xl"
                opacity={0.95}
                c="white"
                style={{
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
                  fontWeight: 500,
                }}
              >
                Quality day-old chicks, fresh eggs, and premium feed. Trusted by farmers, loved by families.
              </Text>
            </motion.div>

            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                marginTop: '16px',
              }}
            >
              <Group>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component="a"
                    href="tel:+254769412626"
                    size="xl"
                    radius="md"
                    style={{
                      background: '#ffa500',
                      color: 'white',
                      border: 'none',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                    }}
                    fw={700}
                  >
                    Order Now
                  </Button>
                </motion.div>
              </Group>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
