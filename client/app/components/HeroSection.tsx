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
        minHeight: '60vh',
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
          backgroundImage: 'url(/images/chicken1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
          opacity: 1,
          zIndex: 0,
        }}
      />

      {/* Blue gradient overlay to ensure readability and maintain theme */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.01) 0%, rgba(66, 165, 245, 0.01) 50%, rgba(100, 181, 246, 0.01) 100%)',
          zIndex: 0,
        }}
      />

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
              <Text
                size="4rem"
                fw={800}
                lh={1.1}
                c="white"
                style={{
                  fontSize: 'clamp(1.75rem, 5vw, 4rem)',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.7), 0 4px 12px rgba(0, 0, 0, 0.5)',
                }}
              >
                Premium Poultry Solutions for Kenyan Families
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text 
                size="lg" 
                opacity={0.95} 
                maw={600} 
                c="white"
                style={{
                  textShadow: '0 2px 6px rgba(0, 0, 0, 0.7), 0 3px 10px rgba(0, 0, 0, 0.5)',
                }}
              >
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
                    component="a"
                    href="tel:+254769412626"
                    size="lg"
                    radius="md"
                    style={{
                      background: 'linear-gradient(135deg, #ffa500, #ff8c00)',
                      border: 'none',
                      textDecoration: 'none',
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
