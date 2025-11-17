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
        background: 'linear-gradient(135deg, #2196f3 0%, #42a5f5 50%, #64b5f6 100%)',
        color: 'white',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Animated background circles */}
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255, 165, 0, 0.1)',
          top: '-100px',
          right: '-100px',
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'rgba(255, 237, 26, 0.1)',
          bottom: '-50px',
          left: '10%',
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Stack gap={30}>
            <motion.div variants={itemVariants}>
              <Text size="sm" fw={600} opacity={0.95}>
                Welcome to Brisken Limited
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text
                size="4rem"
                fw={800}
                lh={1.1}
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, #fffacd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Premium Poultry Solutions for Kenyan Families
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text size="lg" opacity={0.95} maw={600}>
                Quality day-old chicks, fresh eggs, and premium feed. Your trusted partner in
                poultry production, delivering affordable, healthy produce to families while
                supporting livelihoods.
              </Text>
            </motion.div>

            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
              }}
            >
              <Group>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    radius="md"
                    style={{
                      background: 'linear-gradient(135deg, #ffa500, #ff8c00)',
                      border: 'none',
                    }}
                    fw={600}
                  >
                    Call Us for Enquiries
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
