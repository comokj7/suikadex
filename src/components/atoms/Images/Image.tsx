// src/components/atoms/Images/Image.tsx
import React, { useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

interface ImageProps {
  src: string;
  alt?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt = 'pokemon' }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Box position="relative" display="inline-flex" justifyContent="center" alignItems="center">
      {loading && (
        <Box position="absolute">
          <CircularProgress size={30} />
        </Box>
      )}
      <Box
        component="img"
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        sx={{ opacity: loading ? 0 : 1, transition: 'opacity 0.3s' }}
      />
    </Box>
  );
};